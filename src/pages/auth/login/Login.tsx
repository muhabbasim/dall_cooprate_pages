import Translatable from 'src/components/translatable_text/Translatable'
import './login.css'
import { LoginForm } from 'src/components/login-form'
import { Link, useParams } from 'react-router-dom'
import cooperatesData from 'src/data/CooporateData'

export default function Login() {

  const pageId = useParams()?.id
  const currenLand = cooperatesData.find((item) => item.name === pageId)

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="w-full flex justify-between items-center gap-2 md:justify-startx">
          <div>
            <Link to="/performing_art" className="flex items-center gap-2 font-medium">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-primary-foreground">
                <img 
                  loading='lazy'
                  src={currenLand?.logo}
                  alt="logo image" 
                  className='cursor-pointer opacity-90 hover:opacity-100 transition-all ' 
                />
              </div>
              <Translatable>
              {(currenLand?.logo_name_en)?.toUpperCase()}
              </Translatable>.
            </Link>
          </div>

          {/* <LanguageAction/> */}
        </div>
        <div className="flex flex-1 items-center justify-center">
          <LoginForm withDesc/>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <div className='login_img_container h-full'>
          <div className='flex h-full flex-col justify-between gap-10 py-20 px-10'>
            <h1 className='text-3xl text-white font-bold'>
              <Translatable>
                Welcom to 
              </Translatable>
              {" "}{(currenLand?.logo_name_en)?.toUpperCase()}
            </h1>
            <p className='text-white text-xl min-w-[400px]'>
              <Translatable>
                We measurement of capabilities is the foundation of success!
              </Translatable>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
