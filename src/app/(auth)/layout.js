import HeaderAuth from '../../components/HeaderAuth'
export default function AuthLayout({children}) {
    return (
        <>
            <HeaderAuth/>
                {children}
        </> 
)
}
  