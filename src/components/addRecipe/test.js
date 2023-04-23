import { useState } from 'react';
import Button from '@atlaskit/button';
import Select from 'react-select';
import { defaultTheme } from 'react-select';
import ChevronDown from '@atlaskit/icon/glyph/chevron-down';

const stateOptions = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
];

const { colors } = defaultTheme;
const selectStyles = {
  control: provided =>
    Object.assign(Object.assign({}, provided), { minWidth: 240, margin: 8 }),
  menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
};

function Dropdown({ children, isOpen, target, onClose }) {
  return (
    <div css={{ position: 'relative' }}>
      <div
        css={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        onClick={onClose}
      />
      <div css={{ position: 'relative', zIndex: 1 }}>{target}</div>
      {isOpen && (
        <div
          css={{
            position: 'absolute',
            top: '100%',
            left: 0,
            minWidth: target.offsetWidth,
            backgroundColor: colors.neutral0,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: 4,
            overflow: 'hidden',
            zIndex: 2,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownIndicator() {
  return (
    <span
      css={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 2,
      }}
    >
      <svg
        css={{
          fill: 'currentColor',
          height: 8,
          width: 8,
        }}
        viewBox="0 0 8 8"
      >
        <path d="M4 5L0 1h8z" />
      </svg>
    </span>
  );
}

export default function DropdownSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState();

  const handleChange = newValue => {
    setValue(newValue);
    setIsOpen(false);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      target={
        <Button
          iconAfter={<ChevronDown />}
          onClick={() => setIsOpen(prev => !prev)}
          isSelected={isOpen}
        >
          {value ? `State: ${value.label}` : 'Select a State'}
        </Button>
      }
    >
      <Select
        autoFocus
        backspaceRemovesValue={false}
        components={{ DropdownIndicator, IndicatorSeparator: null }}
        controlShouldRenderValue={false}
        hideSelectedOptions={false}
        isClearable={false}
        menuIsOpen={true}
        onChange={handleChange}
        options={stateOptions}
        placeholder="Search..."
        styles={selectStyles}
        tabSelectsValue={false}
        value={value}
      />
    </Dropdown>
  );
}
