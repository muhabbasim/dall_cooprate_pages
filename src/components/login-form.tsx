
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Dispatch, SetStateAction, useCallback, useContext } from "react"
import Translatable from "./translatable_text/Translatable"
import { useLocation, useNavigate } from "react-router-dom"
import { cn } from "src/lib/utils"
import { Input } from "./ui/input"
import ButtonComponent from "./ButtonComponent"
import MsgComponent from "./msg_component/MsgComponent"
import { AppState, useSelector } from "src/store/Store"
import { AuthContext } from "src/context/authContext"


const formSchema = z.object({
  password: z.string().min(1, 'Password is required').min(8, 'Password must be at least 8 characters'),
  email: z.string().min(1, "Email must be at least 5 characters.").email('Invalid Email'),
})

type LoginFormValues = z.infer<typeof formSchema>
type Props = {
  className?: React.ComponentPropsWithoutRef<"form">;
  withDesc?: boolean;
  setOpenLoginModal?: Dispatch<SetStateAction<boolean>>;
  autoFocusEmail?: boolean;
}
export function LoginForm({
  className,
  withDesc = false,
  autoFocusEmail = true
}: Props ) {

  const { login, isLoading, error, clearError } = useContext(AuthContext);

  const rtl = useSelector((state: AppState) => state.customizer.activeDir) === 'rtl';
  const location = useLocation()
  const navigate = useNavigate()
  

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  })
  
  const { isSubmitting } = form.formState;
  const isFormLoading = isSubmitting || isLoading;


  const handleSubmit = async (values: LoginFormValues) => {
    try {
      clearError();
      const res = await login(values);
      console.log(res)

    } catch (error) {
      console.error(error);
    }
  }

  //  Keep useCallback only where it provides value ---  for redirecting to the page user came from before login page
  const handleToRegister = useCallback((e: React.MouseEvent) => {
    e.preventDefault();

    // Safely extract "from" if it exists, otherwise default to current location
    const from =
      location.state &&
      typeof location.state === "object" &&
      "from" in location.state
        ? location.state.from
        : location;

    navigate('/auth/individual-register', { state: { from } });

    // Console log for debug, showing extracted "from"
    console.log("state: ", from);
  }, [navigate, location]);
 
  
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          <Translatable>
            Login to your account
          </Translatable>
        </h1>
       { withDesc && <p className="text-balance text-sm text-muted-foreground">
          <Translatable>
            Enter your email below to login to your account
          </Translatable>
        </p>}
      </div>
      
      <div className="w-full max-w-xsx">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-2 mt-5"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Translatable>
                      Email
                    </Translatable>  
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='w-full lg:min-w-[300px]x'
                      autoFocus={autoFocusEmail}
                      disabled={isFormLoading}
                      placeholder={ rtl ? "اكتب ايميلك هنا" : "Enter your email"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/> 
                </FormItem>
              )}
            />

            <div className='w-full flex-1'>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Translatable>
                        Password
                      </Translatable>  
                    </FormLabel>
                    <FormControl>
                      <Input
                      className='w-full lg:min-w-[300px]x'
                      type='password'
                      autoComplete='no'
                      disabled={isFormLoading}
                      placeholder={ rtl ? "اكتب كلمة المرور هنا" : "Enter your password"}
                      {...field}
                      />
                    </FormControl>
                    <FormMessage/> 
                  </FormItem>
                )}
              />
            </div>

            {error && (
              <MsgComponent
                className='flex items-center justify-center text-rose-700 p-4' 
                message={ error?.message || 'An error occurred'}
              />
            )}

            <div className="flex gap-x-2 items-end lg:justify-end justify-center">
              <ButtonComponent
                title='login'
                type="submit"
                className='w-full my-6'
                variant='main'
                isSubmitting={isFormLoading}
                disabled={isFormLoading}
              />
            </div>
          </form>
        </Form>
      </div>
      <div className="text-centerx text-sm">
        <Translatable>
          Don't have an account?
        </Translatable>
        <button onClick={handleToRegister} className="underline underline-offset-4 text-red-700 px-1">
          <Translatable>  
            Sign up
          </Translatable>
        </button>
      </div>
    </div>
  )
}
