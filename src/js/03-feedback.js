import throttle from 'lodash.throttle';
const contactFormEl = document.querySelector('.feedback-form');

let userInfo = {};

const fillContactFormFields = () => {
  try {
    const userInfoFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (userInfoFromLS === null) {
      return;
    }

    console.dir(contactFormEl);
    for (const prop in userInfoFromLS) {
      contactFormEl.elements[prop].value = userInfoFromLS[prop];
      userInfo[prop] = userInfoFromLS[prop];
    }
  } catch (err) {
    console.log(err);
  }
};

fillContactFormFields();

const onContactFormItemInput = event => {
  const { target } = event;

  const name = target.name;
  const value = target.value;

  userInfo[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
};

const onContactFormSubmit = event => {
  event.preventDefault();
  if (userInfo.email && userInfo.message) {
    console.log(userInfo);
    contactFormEl.reset();
    localStorage.removeItem('feedback-form-state');
    userInfo = {};
  } else {
    alert('Please enter all the fields');
    return false;
  }
};

const throttledOnContactFormItemInput = throttle(onContactFormItemInput, 500);

contactFormEl.addEventListener('input', throttledOnContactFormItemInput);
contactFormEl.addEventListener('submit', onContactFormSubmit);
