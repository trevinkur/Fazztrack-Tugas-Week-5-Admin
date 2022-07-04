import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={1500}
    height={150}
    viewBox="0 0 1500 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="64" rx="0" ry="0" width="88" height="34" /> 
    <rect x="107" y="64" rx="0" ry="0" width="88" height="34" /> 
    <rect x="207" y="64" rx="0" ry="0" width="88" height="34" /> 
    <rect x="307" y="64" rx="0" ry="0" width="88" height="34" /> 
    <rect x="407" y="64" rx="0" ry="0" width="88" height="34" /> 
    <rect x="507" y="64" rx="0" ry="0" width="88" height="34" />
    <rect x="507" y="64" rx="0" ry="0" width="88" height="34" /> 
    <rect x="507" y="64" rx="0" ry="0" width="88" height="34" /> 

    <rect x="7" y="107" rx="0" ry="0" width="88" height="34" /> 
    <rect x="107" y="107" rx="0" ry="0" width="88" height="34" /> 
    <rect x="207" y="107" rx="0" ry="0" width="88" height="34" /> 
    <rect x="307" y="107" rx="0" ry="0" width="88" height="34" /> 
    <rect x="407" y="107" rx="0" ry="0" width="88" height="34" /> 
    <rect x="507" y="107" rx="0" ry="0" width="88" height="34" />
    <rect x="507" y="107" rx="0" ry="0" width="88" height="34" />
    <rect x="507" y="107" rx="0" ry="0" width="88" height="34" />
  </ContentLoader>
)

export default Loader

