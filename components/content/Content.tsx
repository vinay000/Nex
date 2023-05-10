import Tutorials from "@/pages/app/tutorials/Tutorails";
import { Text, Spacer } from "@nextui-org/react";
import Box from "../box/Box";

export const Content = () => (
    <Box css={{ mt: 60 }}>
        <Tutorials />
        <Spacer y={1} />
        <Text size="$lg">
            Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat.
            Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor
            consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel
            pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi
            ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
            dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non
            tellus orci ac.
        </Text>
        <Spacer y={1} />
    </Box>
);
