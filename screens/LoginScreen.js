import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    SafeAreaView,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Pressable,
    Dimensions
} from "react-native"
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../constants/colors'
import PrimaryButton from "../components/PrimaryButton";

const { width, height } = Dimensions.get("screen")

export default function LoginScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.white,
            alignItems: "center",
            marginTop: Platform.OS === "android" ? 40 : 0
        }}>
            <Image
                source={{ uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png" }}
                style={{
                    width: 150,
                    height: 100,
                }}
            />
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center", width: width, paddingHorizontal: width*0.1 }}>
                    <Text style={{
                        color: COLORS.text,
                        fontWeight: "bold",
                        fontSize: 17,
                        marginTop: 12
                    }}>
                        Login in your Account!
                    </Text>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: COLORS.inputBackground,
                        marginTop: 70,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                    }}>
                        <Ionicons name="mail" size={24} color="grey" />
                        <TextInput
                            placeholder="enter your email"
                            value={email}
                            onChangeText={(val) => setEmail(val)}
                            style={{
                                flex: 1,
                                marginLeft: 10,
                                marginVertical: 6,
                                fontSize: 16
                            }}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: COLORS.inputBackground,
                        marginTop: 30,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                    }}>
                        <FontAwesome5 name="lock" size={24} color="grey" />
                        <TextInput
                            placeholder="enter your password"
                            value={password}
                            onChangeText={(val) => setPassword(val)}
                            style={{
                                flex: 1,
                                marginLeft: 10,
                                marginVertical: 6,
                                fontSize: 16
                            }}
                        />
                    </View>
                    <View style={{
                        width: "100%",
                        marginTop: 12,
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Text>Keep me logged in</Text>
                        <Pressable>
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 14,
                                    color: "#007FFF"
                                }}
                            >Forgot password</Text>
                        </Pressable>
                    </View>

                    <View style={{ marginTop: 80 }} />

                    <View style={{
                        width: "100%",
                        alignItems: "center",
                    }}>
                        <PrimaryButton text="Login" size="medium" />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 16
                    }}>
                        <Text style={{
                            color: COLORS.text
                        }}>
                            Don't have an account? 
                        </Text>
                        <Pressable>
                            <Text style={{
                                color: COLORS.text,
                                textDecorationLine: "underline"
                            }}> Sign up</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})