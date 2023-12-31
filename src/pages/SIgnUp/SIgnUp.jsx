/* eslint-disable no-undef */
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const [passwordMatch, setPasswordMatch] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const { createUser, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (!passwordMatch) {
      console.log("Passwords do not match");
      return;
    }

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      profileUpdate(data.name, data.email, data.photoURL)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            photo: data.photoURL,
          };
          console.log(saveUser);
          fetch("https://om-bliss-yoga-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 500,
                });
                navigate("/");
              }
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    });
  };

  const checkPasswordMatch = (password, confirmPassword) => {
    setPasswordMatch(password === confirmPassword);
  };

  return (
    <>
      <Helmet>
        <title>AI-ClassRoom | Sign Up</title>
      </Helmet>
      <div className="text-center my-4">
        <img
          className="h-[180px] flex mx-auto rounded-md"
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWN1bHB1MnJ4ZjM2NDJvY3R4aHJ2M3ZzaDc2cnFuMnBzc3pkYnVqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ltz1ZA728qKw4mEY94/giphy.gif"
          alt=""
        />
      </div>
      <div className="hero min-h-screen mb-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2 md:mr-12">
            <img src="https://i.ibb.co/7Q3hDLd/image.png" alt="" />
          </div>
          <div className="card flex-shrink-0 md:w-2/5 shadow-2xl bg-base-200 md:ml-28 m-4 md:m-0">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-[red]">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-bold">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-[red]">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-bold">Password</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) =>
                    checkPasswordMatch(
                      e.target.value,
                      document.getElementById("confirmPassword").value
                    )
                  }
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one uppercase, one lowercase, one number,
                    and one special character.
                  </p>
                )}
                <label className="label"></label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-bold">Confirm Password</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="confirm password"
                  className="input input-bordered"
                  onChange={(e) =>
                    checkPasswordMatch(
                      document.getElementById("password").value,
                      e.target.value
                    )
                  }
                />
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600">Confirm Password is required</p>
                )}
                {errors.confirmPassword?.type === "minLength" && (
                  <p className="text-red-600">
                    Confirm Password must be 6 characters
                  </p>
                )}
                {errors.confirmPassword?.type === "maxLength" && (
                  <p className="text-red-600">
                    Confirm Password must be less than 20 characters
                  </p>
                )}
                {errors.confirmPassword?.type === "pattern" && (
                  <p className="text-red-600">
                    Confirm Password must have one uppercase, one lowercase, one
                    number, and one special character.
                  </p>
                )}
                <label className="label"></label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-[red]">PhotoURL is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-warning font-bold"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="md:-mt-5 p-3 text-2xl font-bold">
              <small>
                Already have an account? Please{" "}
                <Link
                  className="underline font-bold text-[green] ml-2"
                  to="/login"
                >
                  Login
                </Link>
              </small>
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
