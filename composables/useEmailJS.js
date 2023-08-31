async function useEmailJS(recipientEmail, subject, message) {
  const templateParams = {
    to_email: recipientEmail,
    subject: subject,
    message: message,
  };

  try {
    await emailjs.send(
      'service_2jxobso', // Replace with your EmailJS service ID
      'template_qmh19fb', // Replace with your EmailJS template ID
      templateParams,
      'bdCfKiOmrcwQDwRJQ' // Replace with your EmailJS user ID
    );

    alert('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    alert('An error occurred while sending the email.');
  }
}

export default useEmailJS;
