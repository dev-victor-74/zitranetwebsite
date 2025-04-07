"use server";

export const sendContactformRequest = async (formData: FormData) => {
  formData.append("access_key", process.env.CONTACT_FORM_ACCESS_KEY!);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });

  if (!response.ok)
    return {
      success: false,
      message: "Something went wrong, please try again",
    };

  if (response.ok)
    return {
      success: true,
      message: "Your request has been sent successfully",
    };
};

export const subscribeToNewsLetter = async (formData: FormData) => {
  formData.append("access_key", process.env.CONTACT_FORM_ACCESS_KEY!);
  formData.append("subject", "NewsLetter");
  formData.append(
    "NewsLetter Alert",
    `
        I hope this message finds you well. I recently came across your website and am impressed by the valuable content you provide. I am interested in staying updated with the latest news, articles, and insights from your team.
 
        Could you please add my email address to your newsletter subscription list.
 
       Thank you for your time, and I look forward to receiving your updates.
       `
  );
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });

  if (!response.ok)
    return {
      success: false,
      message: "Something went wrong, please try again",
    };

  if (response.ok)
    return {
      success: true,
      message: "Your request has been sent successfully",
    };
};
