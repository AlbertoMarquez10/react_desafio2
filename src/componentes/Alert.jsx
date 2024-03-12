const Alert = ({alertaf}) => {
  return (
    <div className={`alert alert-${alertaf.color}`} role="alert">
  {alertaf.msg}
</div>
  )
}

export default Alert