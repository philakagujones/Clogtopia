import React from 'react'
import styles from '@/styles/Mail.module.css'
import { Text, Button, Input, useInput } from "@nextui-org/react";

export default function Mail() {
  const { value, reset, bindings } = useInput("");
  
  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);
  return (
    <>
    <div className={styles.words}>
              <Text
                h1
                size={45}
                color="black"
                weight="bold"
              >
                Join our pre-launch waitlist!
              </Text>
    </div>
    <div className={styles.mail}>
    <Input
          {...bindings}
          clearable
          shadow={false}
          onClearClick={reset}
          status={helper.color}
          color={helper.color}
          helperColor={helper.color}
          helperText={helper.text}
          type="email"
          size="lg" 
          labelPlaceholder="Coming Soon"
          // labelPlaceholder="Please enter your email"
          disabled
        />
        <Button 
                shadow color="gradient"
                size="xs"
                disabled
                >
                  Submit
                </Button>
    </div>
    <div className={styles.button}>
                
              </div>  
    </>  
  )
}