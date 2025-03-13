import Image from 'next/image';
import styles from './banner.module.css'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <Image src={"/img/banner-img.png"} 
                alt="Cover"
                fill={true}
                priority
                // objectFit='cover'
                style={{ objectFit: 'cover' }} 
            />
            <div className={styles.bannerText}>
                <h1 className='text-3xl font-bold'>where every event finds its venue</h1>
                <h3 className='text-lg font-semibold'>Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.</h3>
            </div>
        </div>
    );
}