import React from "react"
import './Images.css'


const Images = () => {
    return (
        <>
            <div className="card">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQGLSzBT2rrn1A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691220832902?e=2147483647&v=beta&t=AEtfCq6HAcuHI6xAgoLFNtxF4dAti1kRFisZSJk6X3s"
                    alt="prasad.ganishetty" class="profile-img" />
                <h3>Prasad Ganishetty</h3>
                <p>React Developer | M-Tech </p>
            </div>

            <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                <img
                    src="AllImages/deep c vs sc.png"
                    alt="Image 1"
                    width="150"
                    height="150"
                />
                <img
                    src="AllImages/pdt vs npdt.png"
                    alt="Image 2"
                    width="150"
                    height="150"
                />
            </div>

        </>
    )
}

export default Images