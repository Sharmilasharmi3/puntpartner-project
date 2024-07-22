
import React from 'react';

interface FontSelectorProps {
  fontsData: { [key: string]: { [variant: string]: string } };
  fontFamily: string;
  fontWeight: string;
  isItalic: boolean;
  setFontFamily: (fontFamily: string) => void;
  setFontWeight: (fontWeight: string) => void;
  setIsItalic: (isItalic: boolean) => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({
  fontsData,
  fontFamily,
  fontWeight,
  isItalic,
  setFontFamily,
  setFontWeight,
  setIsItalic,
}) => {
  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
  };

  const handleFontWeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontWeight(e.target.value);
  };

  const handleItalicToggle = () => {
    setIsItalic(!isItalic);
  };

  const fontVariants = Object.keys(fontsData[fontFamily]);

  return (
    <div className="font-selector">
      <div className="font-family">
        <label>
          Font Family:
          <select value={fontFamily} onChange={handleFontFamilyChange}>
            {Object.keys(fontsData).map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="font-variant">
        <label>
          Variant:
          <select value={`${fontWeight}${isItalic ? 'italic' : ''}`} onChange={handleFontWeightChange}>
            {fontVariants.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="italic-toggle">
        <label>
          Italic:
          <label className="switch">
            <input type="checkbox" checked={isItalic} onChange={handleItalicToggle} />
            <span className="slider"></span>
          </label>
        </label>
      </div>
    </div>
  );
};


export default FontSelector;

