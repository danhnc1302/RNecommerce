import React from "react";
import {
    Pressable,
    Text, 
    View
} from 'react-native';
import { COLORS } from "../constants/colors";

export default function PrimaryButton({text, size, onPressFnc}) {
    var WIDTH = 100
    if (size === "small") {
        WIDTH = 100
    } else if (size === "medium") {
        WIDTH = 200
    } else {
        WIDTH = "100%"
    }
    return (
        <Pressable style={{
            justifyContent: "center",
            alignItems: "center",
            width: WIDTH,
            backgroundColor: COLORS.primaryColor,
            borderRadius: 8,
            paddingVertical: 14
        }}>
            <Text style={{
                color: COLORS.white,
                fontWeight: "bold",
                fontSize: 16
            }}>{text}</Text>
        </Pressable>
    )
}