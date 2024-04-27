const Box = props => {
  return (
    <div className={props.className}>
      <h1 className={`heading${props.heading}`}>{props.children}</h1>
    </div>
  )
}

const element = (
  <div className='bg-container'>
    <h1 className='heading'>Boxes</h1>
    <div>
      <Box className='small' children='Small' heading='1' />
      <Box className='medium' children='Medium' heading='2' />
      <Box className='Large' children='Large' heading='3' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
