import {format} from "timeago.js"

function Image({source, published}) {
  return (
    <div className="flex-fill bg-light m-2 p-1 d-flex align-items-center justify-content-center" height="200">
      <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title={format(published)}>
        <img src={source} alt="" />
      </span>
    </div>
  )
}

export default Image;