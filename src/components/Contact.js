import { useState, useContext } from "react";
import axios from "axios";
import Alert from "./Alert";
import GithubContext from "../contexts/GitHub/githubContext";

function Contact() {
    const githubContext = useContext(GithubContext);
    const [formData, setFormData] = useState({
        fname: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        area: "",
        city: "",
        state: "",
        postcode: ""
    });

    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post("/contact", formData);
            // console.log(res.data);
            githubContext.showAlert({ type: "success", msg: res.data.success });
        } catch (error) {
            // console.log(error.response.data);
            githubContext.showAlert({ type: "danger", msg: error.response.data.error });
        }
    }
    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <center>
                    <Alert alert={githubContext.alert} />
                </center>
                <form onSubmit={onSubmitHandler}>
                    <div className="formbold-mb-5">
                        <label htmlFor="name" className="formbold-form-label"> Full Name </label>
                        <input
                            type="text"
                            name="fname"
                            id="name"
                            placeholder="Full Name"
                            className="formbold-form-input"
                            value={formData.fname}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="formbold-mb-5">
                        <label htmlFor="phone" className="formbold-form-label"> Phone Number </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone number"
                            className="formbold-form-input"
                            value={formData.phone}
                            onChange={onChangeHandler}

                        />
                    </div>
                    <div className="formbold-mb-5">
                        <label htmlFor="email" className="formbold-form-label"> Email Address </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            placeholder="Enter your email"
                            className="formbold-form-input"
                            onChange={onChangeHandler}

                        />
                    </div>
                    <div className="flex flex-wrap formbold--mx-3">
                        <div className="w-full sm:w-half formbold-px-3">
                            <div className="formbold-mb-5 w-full">
                                <label htmlFor="date" className="formbold-form-label"> Date </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    value={formData.date}
                                    className="formbold-form-input"
                                    onChange={onChangeHandler}

                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-half formbold-px-3">
                            <div className="formbold-mb-5">
                                <label htmlFor="time" className="formbold-form-label"> Time </label>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    value={formData.time}
                                    className="formbold-form-input"
                                    onChange={onChangeHandler}

                                />
                            </div>
                        </div>
                    </div>

                    <div className="formbold-mb-5 formbold-pt-3">
                        <label className="formbold-form-label formbold-form-label-2">
                            Address Details
                        </label>
                        <div className="flex flex-wrap formbold--mx-3">
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                    <input
                                        type="text"
                                        name="area"
                                        id="area"
                                        value={formData.area}
                                        placeholder="Enter area"
                                        className="formbold-form-input"
                                        onChange={onChangeHandler}

                                    />
                                </div>
                            </div>
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        value={formData.city}
                                        placeholder="Enter city"
                                        className="formbold-form-input"
                                        onChange={onChangeHandler}

                                    />
                                </div>
                            </div>
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        value={formData.state}
                                        placeholder="Enter state"
                                        className="formbold-form-input"
                                        onChange={onChangeHandler}

                                    />
                                </div>
                            </div>
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                    <input
                                        type="text"
                                        name="postcode"
                                        id="post-code"
                                        value={formData.postcode}
                                        placeholder="Post Code"
                                        className="formbold-form-input"
                                        onChange={onChangeHandler}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="formbold-btn">Contact Us</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;