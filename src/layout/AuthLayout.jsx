export const AuthLayout = ({children}) => {
  return (
    <div
    className="flex items-center justify-center flex-col min-h-screen bg-gray-100"
      style={{ 
        backgroundImage: 'url(/public/fondo-farmacia.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {children}
      </div>
  )
}
