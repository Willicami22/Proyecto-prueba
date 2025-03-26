@RestController
@RequestMapping("/persons")
@CrossOrigin(origins = "*")
public class PersonController {
    private final PersonRepository personRepository;

    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    @PostMapping
    public Person createPerson(@RequestBody Person person) {
        return personRepository.save(person);
    }
}
@RestController
@RequestMapping("/persons")
@CrossOrigin(origins = "*")
public class PersonController {
    private final PersonRepository personRepository;

    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    @PostMapping
    public Person createPerson(@RequestBody Person person) {
        return personRepository.save(person);
    }
}
