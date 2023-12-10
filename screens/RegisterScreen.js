import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    SafeAreaView,
    Pressable,
    KeyboardAvoidingView,
    TextInput,
    Dimensions,
    StyleSheet,
    Alert
} from "react-native"
import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import PrimaryButton from "../components/PrimaryButton";
import { COLORS } from "../constants/colors";
import axios from "axios";

const { width, height } = Dimensions.get("screen")

export default function RegisterScreen() {
    const navigation = useNavigation()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async () => {
        const user = {
            name: name,
            email: email,
            password: password
        };
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
                // Thêm các headers CORS khác nếu cần thiết
            }
        };

        await axios.post("http://192.168.68.103:8000/register", user, config).then((response) => {
            Alert.alert(
                "Register Successfull",
                "You have registered successfull"
            )
            setName("")
            setEmail("")
            setPassword("")
        }).catch((error) => {
            // Alert.alert("Register Error:", "An error occurred during registeration")
            // console.log("Registeraion failed", error)
            if (error.response) {
                // Nếu máy chủ trả về phản hồi, nhưng có mã trạng thái không phải 2xx
                console.error("Response Data:", error.response.data);
                console.error("Status Code:", error.response.status);
                console.error("Headers:", error.response.headers);
            } else if (error.request) {
                // Nếu yêu cầu không nhận được phản hồi từ máy chủ
                console.error("No response received:", error.request);
            } else {
                // Có lỗi xảy ra trong quá trình thiết lập yêu cầu
                console.error("Request error:", error.message);
            }
    
            // Hiển thị thông báo lỗi cho người dùng hoặc xử lý theo cách phù hợp với ứng dụng của bạn
            Alert.alert("Register Error:", "An error occurred during registration");
            console.log("Registration failed", error.message);
        })
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            // backgroundColor: COLORS.white,
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
                <View style={{ alignItems: "center", width: width, paddingHorizontal: width * 0.1 }}>
                    <Text style={{
                        color: COLORS.text,
                        fontWeight: "bold",
                        fontSize: 17,
                        marginTop: 12
                    }}>
                        Register to your Account!
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
                        <FontAwesome name="user" size={24} color="grey" />
                        <TextInput
                            placeholder="enter your name"
                            value={name}
                            onChangeText={(val) => setName(val)}
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
                        marginTop: 30,
                        backgroundColor: COLORS.inputBackground,
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
                        <PrimaryButton text="Register" size="medium" onPressFnc={handleRegister} />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 16
                    }}>
                        <Text style={{
                            color: COLORS.text
                        }}>
                            Already have an account?
                        </Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                color: COLORS.text,
                                textDecorationLine: "underline"
                            }}> Sign in</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})