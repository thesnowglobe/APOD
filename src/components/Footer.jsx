/* eslint-disable react/prop-types */
export default function Footer(props) {
  
  const {data} = props

  return (
    <footer>
      <div className="bgGradient"></div>
      <div className="hover-area">
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      <div className="sliding-text">
        <p className="descriptionTitle">{data?.date}</p>
        <p>{data?.explanation}</p>
      </div>
    </footer>
  )
}
