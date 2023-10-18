
import Image from "next/image";
import CardBackImage from '@/images/bg-card-back.png';
import styles from "@/view/CardBack/cardBack.module.scss"

export const CardBack = () => {

    // const {cvc} = useFormContext();

    return (
        <div className={styles.div}>
        <div className={styles.relative}>
          <Image src={CardBackImage} alt="Card back" />
          <p className={styles.cvc}>
            {/* {cvc ? cvc : "000"} */}
          </p>
        </div>
      </div>
    );
}

