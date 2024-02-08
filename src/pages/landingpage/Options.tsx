// import { Link } from 'react-router-dom'
import MsCategory from 'src/components/master_catergory2/MsCategory'

export default function Options() {
  
  return (
    <div className='h-[100vh] flex items-center justify-center gap-3'>
      <MsCategory/>
    </div>
  )
}


{/* {sections.map((item, i) => {
    return (
      <Link to={`/${item.name}`}  key={i} className=' cursor-pointer '>
        <div className=''>
          <div>
            <img className='w-[300px] h-[200px] rounded-md overflow-hidden' src={item?.hero?.hero_images[0]?.img} alt="" />
          </div>
          <div className='flex items-center justify-center'>
            <h1 className='text-2xl pt-2'>
              {item.name}
            </h1>
          </div>
        </div>
      </Link>
    )
  })} */}