import React from 'react'
import vcs from "./Images/vcs.png"
import vc from "./Images/vc.png"
import vci from "./Images/vci.jpeg"

const Vcertify = () => {
  return (
    <>
    <div className='grid place-items-center'>
    <div className='text-center'>
    <img src={vc} alt="" className='text-center'/>
    <h1 className='font-bold text-2xl'>Verify Vaccination Certificate</h1>
    <button className='px-16 mt-3 bg-cyan-400 text-white rounded py-2 font-bold'>Scan Qr Code</button>
    </div>
      
    </div>
    {/* From Hear description startd */}
    <div className='p-10 md:p-20'>
    <p>The Co-WIN vaccination certificate has a digitally signed secure QR code. This can be authenticated online using the verification utility in this portal or using third party verification app using the services outlined below.
    </p>
    <h1 className='text-gray-600 font-bold'>Option 1 – Online verification</h1>
    <p>Steps for online verification</p>
    <ol>
        <li>1. visits <a href="https://verify.cowin.gov.in/">https://verify.cowin.gov.in/</a></li>
        <li>2.Click on <span className='font-bold'>“Scan QR”</span>  code</li>
        <li>3.A notification will prompt to activate your device’s camera</li>
        <li>4.Point the camera to the QR code on the bottom right of the certificate issued and scan
        </li>
        <li>5.Please keep the following points in mind while scanning the QR code
        </li>
        <li>6.If camera is unable to read the QR code within 45 seconds, a message - <span className='font-bold'>“Camera is not able to read the QR code, please try again”</span> with a try again button will be displayed. Verifier will be required to scan the QR code again following the instructions mentioned in Step 2.
        </li>
        <li>7.On successful verification, following attributes are displayed on the screen:
            <div className='flex flex-col md:flex-row'>
            <div className='pl-5 grow'>
            <p>-Message <span className='font-bold'> “Certificate Successfully Verified”</span></p>
            <p>-Age</p>
            <p>-Gender</p>
            <p>-Certificate id</p>
            <p>-Benificiary Id</p>
            <p>-Vaccine Id</p>
            <p>-Date Of Dose</p>

            </div>
            <div>
                <img src={vcs} className="h-64" alt="" />
            </div>

            </div>
        
        </li>
        <li>9.In case of an unsuccessful verification if the certificate is not genuine, screen will show the message “Certificate Invalid”
        <img src={vci} className="w-96 " alt="" />
        </li>
   
   
   
    </ol>
    </div>
    </>
  )
}

export default Vcertify
