import React from 'react'
import { useState, useEffect } from 'react'
// import '@google/model-viewer';

import styles from '@/styles/Model.module.css'

export default function Model() {
  useEffect(() => { import('@google/model-viewer').catch(console.error); }, []); 
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <> 
     <div className="content-tabs">
            <div
            className={ toggleState === 1 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
            <model-viewer src="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/cloggywhite.glb?v=1680423840319"
                  ios-src="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/cloggywhite.glb?v=1680423840319"
                  poster="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/whiteposter.webp?v=1680426640449"
                  alt="Our beautiful case"
                  shadow-intensity="1"
                  camera-controls
                  auto-rotate 
                  ar ar-modes="webxr scene-viewer quick-look">
             </model-viewer>
            </div>

            <div
            className={ toggleState === 2 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
                <model-viewer src="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/cloggyblack.glb?v=1680423829401"
                  ios-src="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/cloggyblack.glb?v=1680423829401"
                  poster="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/blackposter.webp?v=1680426640921"
                  alt="Our beautiful case"
                  shadow-intensity="1"
                  camera-controls
                  auto-rotate 
                  ar ar-modes="webxr scene-viewer quick-look">
                </model-viewer>
            </div>

            <div
            className={ toggleState === 3 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
            <model-viewer src="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/cloggypurp.glb?v=1680423855023"
                  ios-src="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/cloggypurp.glb?v=1680423855023"
                  poster="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/purpposter.webp?v=1680426642412"
                  alt="Our beautiful case"
                  shadow-intensity="1"
                  camera-controls
                  auto-rotate 
                  ar ar-modes="webxr scene-viewer quick-look">
             </model-viewer>
            </div>

            <div
            className={ toggleState === 4 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
            <model-viewer src="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/cloggypink.glb?v=1680423831902"
                  ios-src="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/cloggypink.glb?v=1680423831902"
                  poster="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/pinkposter.webp?v=1680426641861"
                  alt="Our beautiful case"
                  shadow-intensity="1"
                  camera-controls
                  auto-rotate 
                  ar ar-modes="webxr scene-viewer quick-look">
             </model-viewer>
            </div>
            <div
            className={ toggleState === 5 ? `${styles.selectedcontent}` : `${styles.content}` }
            >
            <model-viewer src="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/cloggygrey.glb?v=1680423862559"
                  ios-src="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/cloggygrey.glb?v=1680423862559"
                  poster="https://cdn.glitch.global/acfaa7f2-487e-4b9d-a891-abed8d51d319/greyposter.webp?v=1680426641383"
                  alt="Our beautiful case"
                  shadow-intensity="1"
                  camera-controls
                  auto-rotate 
                  ar ar-modes="webxr scene-viewer quick-look">
            </model-viewer>
            </div>
        </div>

        <div className={styles.tabs}>
            <div className={ toggleState === 1 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(1)}
            >
                <p>White</p>
            </div>
            <div className={ toggleState === 2 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(2)}
            >
                <p>Black</p>
            </div>
            <div className={ toggleState === 3 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(3)}
            >
                <p>Purple</p>
            </div>
            <div className={ toggleState === 4 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(4)}
            >
                <p>Pink</p>
            </div>
            <div className={ toggleState === 5 ? `${styles.selectedtab}` : `${styles.tab}` }
            onClick={() => toggleTab(5)}
            >
                <p>Grey</p>
            </div>
     </div>
    </>
  )
}
