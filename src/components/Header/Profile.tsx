import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData  && (
        <Box mr="4" textAlign="right">
          <Text>Nadson Cerqueira</Text>
          <Text color="gray.300" fontSize="small">
            nadsoncerqueira@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Nadson Cerqueira" src="https://github.com/nadsoncs.png"/>
    </Flex>
  );
}