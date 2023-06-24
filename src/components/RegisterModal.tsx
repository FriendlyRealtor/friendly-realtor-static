import React, { useState } from 'react';
import { Button, Modal, Popup } from './UI';
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { firestore, auth, facebookProvider, googleProvider } from '../context';
import { SocialIcon } from 'react-social-icons';
import { Formik, Form, Field } from 'formik';
import { usePopup } from './UI/Popup';

export const RegisterModal = () => {
  const { isOpen, message, openPopup, closePopup } = usePopup();

  const [open, setOpen] = useState<boolean>(false);

  const handleGoogleSignup = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      await sendEmailVerification(res.user);
      await setDoc(doc(firestore, 'buyers', res.user.uid), {
        name: res.user.displayName,
      });
      openPopup('Email verification sent!');
    } catch (error) {
      console.log('Error signing up with Google.', error);
    }
  };

  const handleFacebookSignUp = async () => {
    try {
      const res = await signInWithPopup(auth, facebookProvider);
      await sendEmailVerification(res.user);
      await setDoc(doc(firestore, 'buyers', res.user.uid), {
        name: res.user.displayName,
      });
      openPopup('Email verification sent!');
    } catch (error) {
      console.log('Error signing up with Facebook.', error);
    }
  };

  const handleSignUp = async (values) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, values.email, values.password);
      await sendEmailVerification(res.user);
      await setDoc(doc(firestore, 'buyers', res.user.uid), {
        name: values.name,
      });
      openPopup('Email verification sent!');
    } catch (error) {
      console.log('Error creating account.', error);
    }
  };

  const validatePassword = (value) => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(value)) {
      return 'Password must contain at least 8 characters including uppercase, lowercase, numbers, and special characters.';
    }
    return undefined;
  };

  const validateConfirmPassword = (value, values) => {
    if (value !== values.password) {
      return 'Passwords do not match.';
    }
    return undefined;
  };

  return (
    <Modal
      open={open}
      trigger={
        <Button type="button" color="secondary" onClick={() => setOpen((prev) => !prev)}>
          Register
        </Button>
      }
      onClose={() => setOpen(false)}
      className="bg-white text-black p-4"
      closeXClassName="text-black"
    >
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">Register on FriendlyRealtor</h2>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSignUp}
      >
        {({ errors, values }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                Full Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email Address
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 font-medium">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded"
                placeholder="Enter your password"
                validate={validatePassword}
              />
              {errors.password && <div className="text-red-500 mt-2">{errors.password}</div>}
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block mb-2 font-medium">
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-2 border rounded"
                placeholder="Confirm your password"
                validate={(value) => {
                  validateConfirmPassword(value, values.password);
                }}
              />
              {errors.confirmPassword && (
                <div className="text-red-500 mt-2">{errors.confirmPassword}</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Register
            </button>
            <div className="flex flex-col items-end">
              <p>or sign up with</p>
              <div className="flex items-center mt-2 justify-end">
                <Button onClick={handleGoogleSignup} className="!p-0 mr-2">
                  <SocialIcon network="google" />
                </Button>
                <Button onClick={handleFacebookSignUp} className="!p-0">
                  <SocialIcon network="facebook" />
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {isOpen && (
        <Popup
          message={message}
          onClose={() => {
            closePopup();
            setOpen(false);
          }}
        />
      )}
    </Modal>
  );
};
