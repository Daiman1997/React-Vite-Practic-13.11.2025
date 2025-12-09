import Button from './Button/Button'

export default function TubsSection( {active, onChange} ) {
    return (
        <section>
            <Button isActive={active === 'main'} buttonClick={() => onChange('main')}>Главная</Button>
            <Button isActive={active === 'aboutMe'} buttonClick={() => onChange('aboutMe')}>Обо мне</Button>
            <Button isActive={active === 'states'} buttonClick={() => onChange('states')}>useState</Button>
            <Button isActive={active === 'effect'} buttonClick={() => onChange('effect')}>useEffect</Button>
            <Button isActive={active === 'saveReference'} buttonClick={() => onChange('saveReference')}>useRef</Button>
            <Button isActive={active === 'context'} buttonClick={() => onChange('context')}>Context</Button>
        </section>
    )
}