import * as React from "react";
import { Text, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "../../style/Colors";
const ButtonLevels = ({ state, level }) => (
  <View style={{ position: "relative", width: 106, height: 100 }}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={106}
      height={100}
      fill="none"
      /*  {...props} */
    >
      <G>
        <Path
          fill={state <= 10 ? colors.whiteSecondary : colors.redSecondary}
          d="M105.894 46c0 25.405-23.705 46-52.947 46S0 71.405 0 46 23.705 0 52.947 0s52.947 20.595 52.947 46"
          transform="translate(0, 8)" // Cette forme sera en arrière-plan
        />

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 106,
            height: 100,
          }}
        >
          <Path
            fill={state <= 10 ? colors.white : colors.red}
            d="M105.894 46c0 25.405-23.705 46-52.947 46S0 71.405 0 46 23.705 0 52.947 0s52.947 20.595 52.947 46"
          />
          <Path
            fill={colors.blackSecondary}
            d="M98.977 45.903c0 20.43-19.062 36.99-42.576 36.99s-42.576-16.56-42.576-36.99c0-20.428 19.062-36.99 42.576-36.99s42.576 16.562 42.576 36.99"
            transform="translate(-3.459, 0)" // Ajustement pour centrer par rapport au premier Path
          />
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: colors.white,
              transform: [{ translateY: -5 }],
            }}
          >
            {level}
          </Text>
        </View>
      </G>
    </Svg>
  </View>
);

export default ButtonLevels;
