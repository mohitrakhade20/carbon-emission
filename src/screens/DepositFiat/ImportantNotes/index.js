import React, {useState} from "react";
import cn from "classnames";
import styles from "./ImportantNotes.module.sass";
// import Icon from "../../components/Icon";

const ImportantNotes = ({ goNext }) => {
	const [file, setFile] = useState(null);

  return (
    <div className={styles.item}>
      <div className={styles.title}>Claim Carbon Credits with Certificate</div>
      <div className={styles.text}>
        We ONLY accept fundings from a account under your own name:
      </div>
      <div className={styles.info}>Pradeep Gupta</div>
       <div className={styles.text}>
        Some Important Notes before buying carbon credits:
      </div>
      <div className={styles.code}>Some legal information before buying the Carbon Credit</div> 
      <br />
      <br />
      <br />
      <div className={styles.text}>
        Or upload Verified Certificates about reducing carbon emission to get the Carbon Credits:
      </div>

      <br/>
      <br/>


      <div className={styles.item}>
									<div className={styles.info}>Upload Certificate</div>
									<div className={styles.text}>
										Uploaded file will be verified by our team and you will be notified by email and notification
									</div>

									<div className={styles.file}>
										<input
											className={styles.load}
											type="file"
											onChange={(e) => {
												console.log(e.target.files[0]);
												setFile(e.target.files[0]);
											}}
										/>
                    
										<div className={styles.icon}>
											{/* <Icon name="upload-file" size="24" /> */}
										</div>
                    
										
									</div>
								</div>

      <div className={styles.btns}>
      <button className={cn("button", styles.button)} onClick={goNext}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default ImportantNotes;
