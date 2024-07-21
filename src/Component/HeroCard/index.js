import './index.css'
// import { Container, Row, Col, Card } from 'react-bootstrap';
function Cardd() {
  return (
    <>
  <div class="container-fluid" className="card-container">
  <div class="row container-fluid">
    <div class="col-lg-4 col-sm-6 aos-init aos-animate" >
      <div class="single-banner-boxes card-hover" style={{border:'dashed 2px  #43e794'}}>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        </div>
        <h3 className='data'>Analyze Your Data</h3>
        <p className='data_paragraph'>Lorem ipsum dolor sit amet elit,<br/> adipiscing, sed do eiusmod tempor<br/> incididunt ut labore dolore magna aliqua.</p>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6 aos-init aos-animate" >
      <div class="single-banner-boxes card-hover" style={{border:'dashed 2px  #43e794'}}>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <h3 className='data'>Customized Plan</h3>
        <p className='data_paragraph'>Lorem ipsum dolor sit amet elit,<br></br> adipiscing, sed do eiusmod tempor <br/> incididunt ut labore dolore magna aliqua.</p>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6 aos-init aos-animate">
      <div class="single-banner-boxes card-hover" style={{border:'dashed 2px  #43e794'}}>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h3 className='data'>Implement Solution</h3>
        <p className='data_paragraph'>Lorem ipsum dolor sit amet elit,<br/> adipiscing, sed do eiusmod tempor<br/> incididunt ut labore dolore magna aliqua.</p>
      </div>
    </div>
  </div>
</div>

  </>
  );
}


export default Cardd;