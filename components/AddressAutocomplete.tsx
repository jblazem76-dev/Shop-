"use client";

import { useEffect, useRef } from "react";

interface AddressFields {
  address: string;
  city: string;
  state: string;
  zip: string;
}

interface Props {
  onSelect: (fields: AddressFields) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export function AddressAutocomplete({ onSelect, inputProps }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!window.google || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ["address"],
      componentRestrictions: { country: "us" },
      fields: ["address_components"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.address_components) return;

      const get = (type: string) =>
        place.address_components!.find((c) => c.types.includes(type))?.long_name ?? "";
      const getShort = (type: string) =>
        place.address_components!.find((c) => c.types.includes(type))?.short_name ?? "";

      const streetNumber = get("street_number");
      const route = get("route");

      onSelect({
        address: `${streetNumber} ${route}`.trim(),
        city: get("locality") || get("sublocality") || get("postal_town"),
        state: getShort("administrative_area_level_1"),
        zip: get("postal_code"),
      });
    });
  }, [onSelect]);

  return (
    <input
      ref={inputRef}
      type="text"
      autoComplete="off"
      {...inputProps}
    />
  );
}
