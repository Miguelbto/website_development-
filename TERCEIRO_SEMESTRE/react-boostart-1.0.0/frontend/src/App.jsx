import { Container, Button, Card } from 'react-bootstrap'

export default function App() {
    return (
        <Container className="py-5">
            <Card className="shadow-sm p-4 text-center">
                <Card.Title as='h1' className="text-primary mb-3">
                    React + BootStrap + TypeScript
                </Card.Title>
                <Card.Text className="lead text-muted">
                    Ambiente rodando perfeitamente!
                </Card.Text>
                <Button variant='primary' size='lg'>
                    Tudo pronto!
                </Button>
            </Card>

        </Container>
    )
}