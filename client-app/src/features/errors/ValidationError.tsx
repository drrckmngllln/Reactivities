import { Message } from "semantic-ui-react";

interface Props {
    errors: string[];
}

export default function ValidationError({errors}: Props) {
    return (
        <Message error>
            {/* {Array.isArray(errors) && errors.length > 0 && (
                <Message.List>
                    {errors.map((err: string, i) => (
                        <Message.Item key={i}>{err}</Message.Item>
                    ))}
                </Message.List>
            )} */}
            {errors && (
                <Message.List>
                    {errors.map((err: string, i) => (
                        <Message.Item key={i}>{err}</Message.Item>
                    ))}
                </Message.List>
            )}
        </Message>
    );
}