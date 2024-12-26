const dummyData = [
    {
      "key": "user_name",
      "label": "Name",
      "type": "text",
      "maxLength": "50"
    },
    {
      "key": "mobile_no",
      "label": "Mobile number",
      "type": "mobile_number"
    },
    {
      "key": "email",
      "label": "Email",
      "type": "email"
    }
  ];
  
  const generateForm = (data) => {
    const container = document.getElementById('container');
    container.classList.add('root');
    const form = document.createElement('form');
    const header = document.createElement('h1');
    header.textContent = 'Wify test project';  
    header.classList.add('title');

    form.append(header);  

    for (let i = 0; i < data.length; i++) {
      const field = data[i];
      const tempDiv = document.createElement('div');
      
      const label = document.createElement('label');
      label.setAttribute('for', field.key);
      label.textContent = field.label;
  
      const input = document.createElement('input');
      if (field.type === 'mobile_number') {
        input.setAttribute('pattern', '[0-9]{3}[0-9]{3}[0-9]{4}');
        input.setAttribute('maxLength', '12');
        input.setAttribute('type', 'tel')
    } else {
        input.setAttribute('type', field.type)
    }
        input.setAttribute('name', field.key);
        input.setAttribute('id', field.key);
        input.setAttribute('required', 'true')
  
      if ('maxLength' in field) {
        input.setAttribute('maxLength', field.maxLength);
      }
  
      tempDiv.appendChild(label);
      tempDiv.appendChild(input);
      form.appendChild(tempDiv); 
    }
    
    const buttonDiv = document.createElement('div')
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.type = 'submit';
    buttonDiv.append(submitButton)
    form.appendChild(buttonDiv);
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Submitted successfully');
    });
  
    container.appendChild(form);
  };
  
  generateForm(dummyData);
  