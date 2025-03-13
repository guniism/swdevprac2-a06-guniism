import Image from 'next/image'
// import styles from './card.module.css'
import InteractiveCard from './InteractiveCard';

interface Props{
    venueName: string;
    imgSrc: string;
}

export default function Card(card:Props){
    return (
        // <div className="w-[250px] h-[300px] bg-white shadow-lg rounded-[10px] p-[5px]" onClick={() => alert("You Select" + card.venueName)}>
        <InteractiveCard>
            <div className='w-[250px] h-[300px] p-[5px]'>          
                <div className="w-full h-[70%] relative">
                    <Image src={card.imgSrc} 
                        alt="Card Picture"
                        fill={true}
                        priority
                        // objectFit='cover'
                        style={{ objectFit: 'cover' }} 
                        className="rounded-[5px]"
                    />
                </div>
                <div className="h-[30%] p-[10px]">
                    <h4 className="font-semibold text-[16px] text-[#055D70]">"{card.venueName}</h4>
                    {/* <p className="text-xs">A stunning bouquet hall where love blossoms and unforgettable memories are made.</p> */}
                </div>
            </div>
        </InteractiveCard>
        // </div>
    )
}