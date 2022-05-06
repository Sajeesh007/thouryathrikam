import Header from "../Navigation/Header";

export default function Layout({children}) {
  return (
    <div className="flex flex-col relative">
      <Header />
      <div className="z-20">
        {children}
      </div>
    </div>
  )
}
