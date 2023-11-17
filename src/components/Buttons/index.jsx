import React from "react";

export default function ButtonComponent({ buttonText, handlePress }) {
    return (
      <Button activeOpacity={0.95} onPress={handlePress}>
        <Text>
          <ButtonContent>{buttonText}</ButtonContent>
        </Text>
      </Button>
    );
  }