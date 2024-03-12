const SocialButton = ({face, linked, git}) => {
  return (
    <div>
        <h1 className="fs-1 text text-center">Crea una cuenta</h1>
        <div className="d-flex gap-3 justify-content-center mb-2">
            <img className="border border-secondary rounded-circle p-3" src={face} alt="" />
            <img className="border border-secondary rounded-circle p-3" src={git} alt="" />
            <img className="border border-secondary rounded-circle p-3 linkedin" src={linked} alt="" />
        </div>
        <h4 className="fs-6 text text-center mb-4">
            O una tu email para registrarte
        </h4>
    </div>
  )
}

export default SocialButton