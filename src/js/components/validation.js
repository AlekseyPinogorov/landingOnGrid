import JustValidate from 'just-validate';

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.about-form', {
    errorLabelStyle: {
      color: '#F06666',
    },
  });

  validation
    .addField('.about-form__input', [{
        rule: 'required',
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      }
    ])
})

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.contacts-form', {
    errorLabelStyle: {
      color: '#FF3030',
    },
  });

  validation
    .addField('.email', [{
        rule: 'required',
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      }
    ])

    .addField('.name', [{
      rule: 'required',
      errorMessage: 'Недопустимый формат ',
    },
    {
      rule: 'customRegexp',
      value: /^[a-zа-яё]+$/i,
      errorMessage: 'Недопустимый формат ',
    }
  ])
})
