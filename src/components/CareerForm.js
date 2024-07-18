import React from 'react';
import '../styles/CareerForm.css';

function CareerForm() {
  return (
    <>
      {/* <!-- pop-up-apply-form-start --> */}
        <div id="formPopup" className="form-popup">
            <form action="#" className="form-container">
                {/* <!-- form-upper-part-start --> */}
                <div className="close-icon" id='closeIcon'>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="form-title">
                    <h2>Apply for this Role</h2>
                </div>
                {/* <!-- form-upper-part-end --> */}
                {/* <!-- form-fields-start --> */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="single-form">
                            <input type="text" id="fullName" placeholder="Full Name *" required />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="single-form">
                            <input type="email" id="email" placeholder="Email *" required />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="single-form">
                            <select id="country" name="country" required>
                                <option value="" disabled selected>Please Select your country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">UK</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="single-form">
                            <label for="cv">Upload CV*</label>
                            <input type="file" id="cv" name="cv" required/>
                        </div>
                    </div>
                </div>
                <button type="submit" class="theme-btn">Submit</button>
                {/* <!-- form-fields-start --> */}
            </form>
        </div>
        {/* <!-- pop-up-apply-form-end --> */}
    </>
  )
}
// {{
//     document.getElementById("applyBtn").addEventListener("click", function () {
//         document.getElementById("formPopup").style.display = "flex";
//     });

//     document.getElementById("closeIcon").addEventListener("click", function () {
//         document.getElementById("formPopup").style.display = "none";
//     });
// }}

export default CareerForm;

