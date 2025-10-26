
// Libraries
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { fadeInLeft } from 'src/components/animation/GlobalAnimations';
import { useSelector } from 'src/store/Store';
import { cn } from 'src/lib/utils';
import Translatable from 'src/components/translatable_text/Translatable';

const Sidebar = (props: any) => {
    const rtl = useSelector(state => state.customizer.activeDir === 'rtl')
    
    return (
        <aside className="col-12 col-xl-3 offset-xl-1 col-lg-4 col-md-7 md:pl-[15px]">
    
       
            <div className='mb-20 xs:mb-[35px]'>
                <span className='mb-[35px] text-lg font-bold block'><Translatable>Discover more topics</Translatable></span>
                <ul className='max-h-[380px] overflow-scroll'>
                    {props &&  props?.category_data?.map((item: any, i: any) => (
                        <motion.li className='flex mb-[45px]' {...fadeInLeft} key={i}>
                            <figure className="h-[65px] w-[80px] m-0 shrink-0">
                                <a aria-label="link" href={`${item?.id}`}>
                                    <img src={item?.img} alt="" className='rounded-[3px] h-[80px] object-cover' />
                                </a>
                            </figure>
                            <div className={cn('leading-normal relative top-[-3px] grow', rtl ? 'pr-[30px]' : 'pl-[30px]')}>
                                <Link aria-label="link" to={``} className='mb-[5px] sm:mb-0 font-bold inline-block'>
                                    <Translatable>
                                        {item?.subtitle}
                                    </Translatable>
                                </Link>
                                <p 
                                    style={{
                                        overflow: 'hidden',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2
                                    }}
                                    className="leading-[22px] text-[14px] block "
                                >
                                    <Translatable>
                                        {item?.title}
                                    </Translatable>
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
            <motion.div className='visible mb-20 md:w-[90%] sm:w-full' {...fadeInLeft}>
                <span className='mb-[35px] font-bold text-lg block'> <Translatable>Category Tags</Translatable></span>
                <Link aria-label="tag" to="#" className='inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>Tourism</Link>
                <Link aria-label="tag" to="#" className='inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>Mountains</Link>
                <Link aria-label="tag" to="#" className='inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>Lifestyle</Link>
                <Link aria-label="tag" to="#" className='inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>Hotel</Link>
            </motion.div>
            <div className='mb-20 xs:mb-[35px]'>
                <motion.span className="mb-[35px] font-bold text-lg block" {...fadeInLeft}> <Translatable>Categories</Translatable></motion.span>
                <motion.ul className="pl-0" {...fadeInLeft}>
                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                        <Link aria-label="link" to="#" className='inline-block text-left'>Entertainment</Link>
                        <span className={cn('text-[14px] absolute top-[1px] ', rtl ? "left-0 text-left ": "right-0 text-right")}>10</span>
                    </li>
                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                        <Link aria-label="link" to="#" className='inline-block text-left'>Business</Link>
                        <span className={cn('text-[14px] absolute top-[1px] ', rtl ? "left-0 text-left ": "right-0 text-right")}>05</span>
                    </li>
                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                        <Link aria-label="link" to="#" className='inline-block text-left'>Creative</Link>
                        <span className={cn('text-[14px] absolute top-[1px] ', rtl ? "left-0 text-left ": "right-0 text-right")}>03</span>
                    </li>
                </motion.ul>
            </div>

        </aside>
    )
}

export default Sidebar