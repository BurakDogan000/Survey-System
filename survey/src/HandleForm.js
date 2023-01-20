class HandleForm {
    static onChangeInput(event, component) {
        component.setState((state) => {
            let value = null;
            if (event.target.type === "checkbox") {
                value = eval(`state.formData${event.target.name.split(".").map((name) => `['${name}']`).join("")}`);
                if (Array.isArray(value)) {
                    if (event.target.checked) {
                        if (!value.includes(event.target.value))
                            value.push(event.target.value)
                    } else {
                        value = value.filter(v => v != event.target.value)
                    }
                } else {
                    value = [event.target.value]
                }
            } else {
                value = event.target.value;
            }
            eval(`state.formData${event.target.name.split(".").map((name) => `['${name}']`).join("")} = value`);
            return state;
        })
    }

    static onChangeSelect(key, value, component) {
        component.setState((state) => {
            if (Array.isArray(value)) {
                eval(`state.formData${key.split(".").map((name) => `['${name}']`).join("")}=[]`);
                value.forEach(item => {
                    let data = (typeof item.value !== "undefined") ? item.value : item;
                    eval(`state.formData${key.split(".").map((name) => `['${name}']`).join("")}.push(data)`);
                })
            } else {
                eval(`state.formData${key.split(".").map((name) => `['${name}']`).join("")} = value`);
            }
            return state;
        });
    }
}

export default HandleForm;