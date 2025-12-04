import Button from './Button/Button'

export default function TubsSection( {active, onChange} ) {
    return (
        <section>
            <Button isActive={active === 'main'} buttonClick={() => onChange('main')}>Главная</Button>
            <Button isActive={active === 'aboutMe'} buttonClick={() => onChange('aboutMe')}>Обо мне</Button>
            <Button isActive={active === 'states'} buttonClick={() => onChange('states')}>Состояния</Button>
            <Button isActive={active === 'effect'} buttonClick={() => onChange('effect')}>useEffect</Button>
        </section>
    )
}