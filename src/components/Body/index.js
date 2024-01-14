import './index.css'

const Body = () => {
  return (
    <div className="body-container">
      <div className="left-navbar">
        <h1 className="left-navbar-heading">Left Navbar Menu</h1>
        <ul>
          <p className="left-navbar-content">Item 1</p>
          <p className="left-navbar-content">Item 2</p>
          <p className="left-navbar-content">Item 3</p>
          <p className="left-navbar-content">Item 4</p>
        </ul>
      </div>
      <div className="content-container">
        <h1 className="content-header">Content</h1>
        <p className="content-description">
          Lorem ipsum, Before the completion of the human genome project, many
          scientists were expecting to find 100,000 or more genes in our genome.
          This was based on the assumption that because we are one of the most
          complex creatures on Earth we should have lots of genes. However, it
          turned out we only have around 24,000 genes.
        </p>
      </div>
      <div className="right-navbar">
        <h1 className="right-navbar-heading">Right Navbar Menu</h1>
        <div className="right-navbar-content">
          <p>Ad 1</p>
        </div>
        <div className="right-navbar-content">
          <p>Ad 2</p>
        </div>
      </div>
    </div>
  )
}

export default Body
