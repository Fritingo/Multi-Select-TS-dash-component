// import React, { useState, useRef, useCallback } from "react";
// import { default as ReactSelect, components, InputAction } from "react-select";

// export type Option = {
//   label: string;
//   value: string | number;
// };

// interface Props {
//   id?: string;
//   options: Option[];
//   value: (string | number)[];
//   class_name?: string;
//   setProps?: (props: Record<string, any>) => void;
//   isSelectAll?: boolean;
//   menuPlacement?: "auto" | "top" | "bottom";
//   components?: Record<string, React.ComponentType<any>>;
// }

// const MultiSelect: React.FC<Props> = ({
//   options,
//   value,
//   isSelectAll,
//   menuPlacement,
//   components: customComponents,
//   ...props
// }) => {
//   const [selectInput, setSelectInput] = useState<string>("");
//   const isAllSelected = useRef<boolean>(false); // Track Select All state
//   const selectAllLabel = useRef<string>("Select all");
//   const allOption = { value: "*", label: selectAllLabel.current };

//   const filterOptions = (options: Option[], input: string) =>
//     options.filter(({ label }) => label.toLowerCase().includes(input.toLowerCase()));

//   const filteredOptions = filterOptions(options, selectInput);
//   const filteredSelectedOptions = filterOptions(
//     options.filter((opt) => value.includes(opt.value)),
//     selectInput
//   );

//   const Option: React.FC<any> = useCallback((props) => {
//     const { value: optionValue, isSelected, label } = props;
//     const isAllOption = optionValue === "*";

//     const handleCheckboxChange = () => {
//       if (isAllOption) {
//         // Handle "Select All" checkbox
//         if (isAllSelected.current) {
//           props.setProps({ value: [] });  // Unselect all
//         } else {
//           props.setProps({ value: filteredOptions.map(opt => opt.value) });  // Select all options
//         }
//         isAllSelected.current = !isAllSelected.current;  // Toggle Select All state
//       } else {
//         // Handle individual option checkbox
//         if (isSelected) {
//           props.setProps({ value: value.filter((val) => val !== optionValue) });
//         } else {
//           props.setProps({ value: [...value, optionValue] });
//         }
//       }
//     };

//     return (
//       <components.Option {...props}>
//         {isAllOption && filteredSelectedOptions.length > 0 ? (
//           <input type="checkbox" ref={(input) => { if (input) input.indeterminate = true; }} />
//         ) : (
//           <input
//             type="checkbox"
//             checked={isSelected || isAllSelected.current}
//             onChange={handleCheckboxChange}
//           />
//         )}
//         <label style={{ marginLeft: "5px" }}>{label}</label>
//       </components.Option>
//     );
//   }, [filteredOptions, filteredSelectedOptions, value, props]);

//   const Input: React.FC<any> = useCallback((props) => (
//     <>
//       {selectInput.length === 0 ? (
//         <components.Input {...props} autoFocus={props.selectProps.menuIsOpen} />
//       ) : (
//         <div style={{ border: "1px dotted gray" }}>
//           <components.Input {...props} autoFocus={props.selectProps.menuIsOpen} />
//         </div>
//       )}
//     </>
//   ), [selectInput]);

//   const customFilterOption = ({ value, label }: Option, input: string) => {
//     return (value !== "*" && label.toLowerCase().includes(input.toLowerCase())) || (value === "*" && filteredOptions.length > 0);
//   };

//   const onInputChange = useCallback(
//     (inputValue: string, { action }: { action: InputAction }) => {
//       if (action === "input-change") {
//         setSelectInput(inputValue);
//       } else if (action === "menu-close" && selectInput !== "") {
//         setSelectInput("");
//       }
//     },
//     [selectInput]
//   );

//   const customStyles = {
//     multiValueLabel: (def: any) => ({ ...def, backgroundColor: "lightgray" }),
//     multiValueRemove: (def: any) => ({ ...def, backgroundColor: "lightgray" }),
//     valueContainer: (base: any) => ({ ...base, maxHeight: "65px", overflow: "auto" }),
//     option: (styles: any, { isSelected, isFocused }: any) => ({
//       ...styles,
//       backgroundColor: isSelected && !isFocused ? null : isFocused && !isSelected
//         ? styles.backgroundColor
//         : isFocused && isSelected ? "#DEEBFF" : null,
//     }),
//     menu: (def: any) => ({ ...def, zIndex: 9999 }),
//   };

//   if (isSelectAll && options.length !== 0) {
//     return (
//       <ReactSelect
//         {...props}
//         inputValue={selectInput}
//         onInputChange={onInputChange}
//         options={[allOption, ...options]}
//         components={{
//           Option,
//           Input,
//           ...customComponents,
//         }}
//         filterOption={customFilterOption}
//         menuPlacement={menuPlacement ?? "auto"}
//         styles={customStyles}
//         isMulti
//         closeMenuOnSelect={false}
//         tabSelectsValue={false}
//         backspaceRemovesValue={false}
//         hideSelectedOptions={false}
//         blurInputOnSelect={false}
//       />
//     );
//   }

//   return (
//     <ReactSelect
//       {...props}
//       inputValue={selectInput}
//       onInputChange={onInputChange}
//       filterOption={customFilterOption}
//       components={{
//         Input,
//         ...customComponents,
//       }}
//       menuPlacement={menuPlacement ?? "auto"}
//       styles={customStyles}
//       isMulti
//       closeMenuOnSelect={false}
//       tabSelectsValue={false}
//       backspaceRemovesValue={false}
//       blurInputOnSelect={true}
//     />
//   );
// };

// MultiSelect.defaultProps = {
//   value: [],
// };

// export default MultiSelect;


// import React, { useState, useRef, useCallback } from "react";
// import { default as ReactSelect, components, InputAction } from "react-select";

// export type Option = {
//   label: string;
//   value: string | number;
// };

// interface Props {
//   id?: string;
//   options: Option[];
//   value: (string | number)[];
//   class_name?: string;
//   setProps?: (props: Record<string, any>) => void;
//   isSelectAll?: boolean;  // Flag for enabling Select All functionality
//   menuPlacement?: "auto" | "top" | "bottom";
//   components?: Record<string, React.ComponentType<any>>;
// }

// const MultiSelect: React.FC<Props> = ({
//   options,
//   value,
//   isSelectAll,
//   menuPlacement,
//   components: customComponents,
//   ...props
// }) => {
//   const [selectInput, setSelectInput] = useState<string>("");
//   const isAllSelected = useRef<boolean>(false); // Track Select All state
//   const selectAllLabel = useRef<string>("Select all");
//   const allOption = { value: "*", label: selectAllLabel.current };

//   const filterOptions = (options: Option[], input: string) =>
//     options.filter(({ label }) => label.toLowerCase().includes(input.toLowerCase()));

//   const filteredOptions = filterOptions(options, selectInput);
//   const filteredSelectedOptions = filterOptions(
//     options.filter((opt) => value.includes(opt.value)),
//     selectInput
//   );

//   const Option: React.FC<any> = useCallback((props) => {
//     const { value: optionValue, isSelected, label } = props;
//     const isAllOption = optionValue === "*";

//     const handleCheckboxChange = () => {
//       if (isAllOption) {
//         // Handle "Select All" checkbox
//         if (isAllSelected.current) {
//           props.setProps({ value: [] });  // Unselect all
//         } else {
//           props.setProps({ value: filteredOptions.map(opt => opt.value) });  // Select all options
//         }
//         isAllSelected.current = !isAllSelected.current;  // Toggle Select All state
//       } else {
//         // Handle individual option checkbox
//         if (isSelected) {
//           props.setProps({ value: value.filter((val) => val !== optionValue) });
//         } else {
//           props.setProps({ value: [...value, optionValue] });
//         }
//       }
//     };

//     return (
//       <components.Option {...props}>
//         {isAllOption && filteredSelectedOptions.length > 0 ? (
//           <input type="checkbox" ref={(input) => { if (input) input.indeterminate = true; }} />
//         ) : (
//           <input
//             type="checkbox"
//             checked={isSelected || isAllSelected.current}
//             onChange={handleCheckboxChange}
//           />
//         )}
//         <label style={{ marginLeft: "5px" }}>{label}</label>
//       </components.Option>
//     );
//   }, [filteredOptions, filteredSelectedOptions, value, props]);

//   const Input: React.FC<any> = useCallback((props) => (
//     <>
//       {selectInput.length === 0 ? (
//         <components.Input {...props} autoFocus={props.selectProps.menuIsOpen} />
//       ) : (
//         <div style={{ border: "1px dotted gray" }}>
//           <components.Input {...props} autoFocus={props.selectProps.menuIsOpen} />
//         </div>
//       )}
//     </>
//   ), [selectInput]);

//   const customFilterOption = ({ value, label }: Option, input: string) => {
//     return (value !== "*" && label.toLowerCase().includes(input.toLowerCase())) || (value === "*" && filteredOptions.length > 0);
//   };

//   const onInputChange = useCallback(
//     (inputValue: string, { action }: { action: InputAction }) => {
//       if (action === "input-change") {
//         setSelectInput(inputValue);
//       } else if (action === "menu-close" && selectInput !== "") {
//         setSelectInput("");
//       }
//     },
//     [selectInput]
//   );

//   const customStyles = {
//     multiValueLabel: (def: any) => ({ ...def, backgroundColor: "lightgray" }),
//     multiValueRemove: (def: any) => ({ ...def, backgroundColor: "lightgray" }),
//     valueContainer: (base: any) => ({ ...base, maxHeight: "65px", overflow: "auto" }),
//     option: (styles: any, { isSelected, isFocused }: any) => ({
//       ...styles,
//       backgroundColor: isSelected && !isFocused ? null : isFocused && !isSelected
//         ? styles.backgroundColor
//         : isFocused && isSelected ? "#DEEBFF" : null,
//     }),
//     menu: (def: any) => ({ ...def, zIndex: 9999 }),
//   };

//   if (isSelectAll && options.length !== 0) {
//     return (
//       <ReactSelect
//         {...props}
//         inputValue={selectInput}
//         onInputChange={onInputChange}
//         options={[allOption, ...options]}
//         components={{
//           Option,
//           Input,
//           ...customComponents,
//         }}
//         filterOption={customFilterOption}
//         menuPlacement={menuPlacement ?? "auto"}
//         styles={customStyles}
//         isMulti
//         closeMenuOnSelect={false}
//         tabSelectsValue={false}
//         backspaceRemovesValue={false}
//         hideSelectedOptions={false}
//         blurInputOnSelect={false}
//       />
//     );
//   }

//   return (
//     <ReactSelect
//       {...props}
//       inputValue={selectInput}
//       onInputChange={onInputChange}
//       filterOption={customFilterOption}
//       components={{
//         Input,
//         ...customComponents,
//       }}
//       menuPlacement={menuPlacement ?? "auto"}
//       styles={customStyles}
//       isMulti
//       closeMenuOnSelect={false}
//       tabSelectsValue={false}
//       backspaceRemovesValue={false}
//       blurInputOnSelect={true}
//     />
//   );
// };

// MultiSelect.defaultProps = {
//   value: [],
// };

// export default MultiSelect;



import React, { useState, useRef, useCallback } from "react";
import { default as ReactSelect, components, InputAction } from "react-select";

export type Option = {
  label: string;
  value: string | number;
};

interface Props {
  id?: string;
  options: Option[];
  value: (string | number)[];
  class_name?: string;
  setProps?: (props: Record<string, any>) => void;
  isSelectAll?: boolean;  // Flag for enabling Select All functionality
  menuPlacement?: "auto" | "top" | "bottom";
  components?: Record<string, React.ComponentType<any>>;
}

const MultiSelect: React.FC<Props> = ({
  options,
  value,
  isSelectAll,
  menuPlacement,
  components: customComponents,
  ...props
}) => {
  const [selectInput, setSelectInput] = useState<string>("");
  const isAllSelected = useRef<boolean>(false); // Track Select All state
  const selectAllLabel = useRef<string>("Select all");
  const allOption = { value: "*", label: selectAllLabel.current };

  const filterOptions = (options: Option[], input: string) =>
    options.filter(({ label }) => label.toLowerCase().includes(input.toLowerCase()));

  const filteredOptions = filterOptions(options, selectInput);
  const filteredSelectedOptions = filterOptions(
    options.filter((opt) => value.includes(opt.value)),
    selectInput
  );

  const Option: React.FC<any> = useCallback((props) => {
    const { value: optionValue, isSelected, label } = props;
    const isAllOption = optionValue === "*";

    const handleCheckboxChange = () => {
      if (isAllOption) {
        // Handle "Select All" checkbox
        if (isAllSelected.current) {
          props.setProps({ value: [] });  // Unselect all
        } else {
          props.setProps({ value: filteredOptions.map(opt => opt.value) });  // Select all options
        }
        isAllSelected.current = !isAllSelected.current;  // Toggle Select All state
      } else {
        // Handle individual option checkbox
        if (isSelected) {
          props.setProps({ value: value.filter((val) => val !== optionValue) });
        } else {
          props.setProps({ value: [...value, optionValue] });
        }
      }
    };

    return (
      <components.Option {...props}>
        {isAllOption && filteredSelectedOptions.length > 0 ? (
          <input type="checkbox" ref={(input) => { if (input) input.indeterminate = true; }} />
        ) : (
          <input
            type="checkbox"
            checked={isSelected || isAllSelected.current}
            onChange={handleCheckboxChange}
          />
        )}
        <label style={{ marginLeft: "5px" }}>{label}</label>
      </components.Option>
    );
  }, [filteredOptions, filteredSelectedOptions, value, props]);

  const Input: React.FC<any> = useCallback((props) => (
    <>
      {selectInput.length === 0 ? (
        <components.Input {...props} autoFocus={props.selectProps.menuIsOpen} />
      ) : (
        <div style={{ border: "1px dotted gray" }}>
          <components.Input {...props} autoFocus={props.selectProps.menuIsOpen} />
        </div>
      )}
    </>
  ), [selectInput]);

  const customFilterOption = ({ value, label }: Option, input: string) => {
    return (value !== "*" && label.toLowerCase().includes(input.toLowerCase())) || (value === "*" && filteredOptions.length > 0);
  };

  const onInputChange = useCallback(
    (inputValue: string, { action }: { action: InputAction }) => {
      if (action === "input-change") {
        setSelectInput(inputValue);
      } else if (action === "menu-close" && selectInput !== "") {
        setSelectInput("");
      }
    },
    [selectInput]
  );

  const customStyles = {
    multiValueLabel: (def: any) => ({ ...def, backgroundColor: "lightgray" }),
    multiValueRemove: (def: any) => ({ ...def, backgroundColor: "lightgray" }),
    valueContainer: (base: any) => ({ ...base, maxHeight: "65px", overflow: "auto" }),
    option: (styles: any, { isSelected, isFocused }: any) => ({
      ...styles,
      backgroundColor: isSelected && !isFocused ? null : isFocused && !isSelected
        ? styles.backgroundColor
        : isFocused && isSelected ? "#DEEBFF" : null,
    }),
    menu: (def: any) => ({ ...def, zIndex: 9999 }),
  };

  if (isSelectAll && options.length !== 0) {
    return (
      <ReactSelect
        {...props}
        inputValue={selectInput}
        onInputChange={onInputChange}
        options={[allOption, ...options]}
        components={{
          Option,
          Input,
          ...customComponents,
        }}
        filterOption={customFilterOption}
        menuPlacement={menuPlacement ?? "auto"}
        styles={customStyles}
        isMulti
        closeMenuOnSelect={false}
        tabSelectsValue={false}
        backspaceRemovesValue={false}
        hideSelectedOptions={false}
        blurInputOnSelect={false}
      />
    );
  }

  return (
    <ReactSelect
      {...props}
      inputValue={selectInput}
      onInputChange={onInputChange}
      filterOption={customFilterOption}
      components={{
        Input,
        ...customComponents,
      }}
      menuPlacement={menuPlacement ?? "auto"}
      styles={customStyles}
      isMulti
      closeMenuOnSelect={false}
      tabSelectsValue={false}
      backspaceRemovesValue={false}
      blurInputOnSelect={true}
    />
  );
};

MultiSelect.defaultProps = {
  value: [],
};

export default MultiSelect;
