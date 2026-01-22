import CustomButton from "@/src/presentation/components/atoms/CustomButton";
import { CustomText } from "@/src/presentation/components/atoms/CustomText";
import { sizes } from "@/src/presentation/theme";
import { globalStyles } from "@/src/presentation/theme/styles";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

const OTP_VERIFICATION_OPTIONS: { key: string, title: string, description?: string, buttonVariant: "primary" | "secondary" | "link" }[] = [

  { key: 'OTP_AS_MODAL', title: 'OTP Verification as Modal', buttonVariant: 'primary' },
  { key: 'OTP_AS_SCREEN', title: 'OTP Verification as Screen', buttonVariant: 'secondary' },

  { key: 'DUMMY_LINK_BUTTON', title: 'Dummy Link Button', buttonVariant: 'link', description: "Nothing will happen clicking Dummy Button" },

]
export default function Index() {
  const router = useRouter();


  const handleNavigate = (key: string) => {
    switch (key) {
      case 'OTP_AS_MODAL':
        router.push('/modal');
        break;
      case 'OTP_AS_SCREEN':
        router.push({
          pathname: '/authentication',
          params: {
            identifier: 'user@example.com',
            identifierType: 'EMAIL',
            //onSuccess: (token: string) => console.log('OTP Verified')
          }
        });
        break;
      default:
        break;
    }
  }
  return (
    <View style={[globalStyles.container, styles.container]}>

      <CustomText variant='headlineMedium'>{"Exlplore multiple OTP flows"}</CustomText>
      {OTP_VERIFICATION_OPTIONS.map((option) => (
        <View key={option.key}>
          <CustomButton title={option.title} onPress={() => handleNavigate(option.key)} variant={option.buttonVariant} />
          {!!option?.description && <CustomText align='center'>{option?.description}</CustomText>}
        </View>
      ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: sizes.spacing.md,
    paddingVertical: sizes.spacing.lg
  }
})
