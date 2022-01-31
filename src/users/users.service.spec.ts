import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from '../Model/users.model';
import { UsersService } from './users.service';

//--Consulta--
//https://www.google.com/search?client=firefox-b-d&q=unit+test+nest+js+testing+restful
//https://circleci.com/blog/getting-started-with-nestjs-and-automatic-testing/

//--Próximos passos--
//Criar um repositorio chamado Testing Repository? Ver utilidade ou adaptar os products para o user service : 
//C:\Users\JoseBerbary\Documents\Appius\exemplo\nest-starter-testing

//--Ao finalizar--
//Criar uma Branch chamada Release/version - x.x e commitar"Unit Testing"

describe('UsersService', () => {
  let service;
  let repository;
  const mockUsermodel = () => ({
    createUser: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
  });


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService,
        {
          provide: UsersRepository,
          useFactory: mockUsermodel,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<UsersRepository>(UsersRepository);
  });

  describe('createUser', () => {
    it('should save a users in the database', async () => {
      repository.createUser.mockResolvedValue('someProduct');

      expect(repository.createUser).not.toHaveBeenCalled();

      const createUserDto = {
        first_name: 'sample name',
        email: 'sample description',
        passwords: 'sample price',
        user_status: '0',
      };

      const result = await repository.createUser(createUserDto);

      expect(repository.createUser).toHaveBeenCalledWith(
        createUserDto,
      );
      expect(result).toEqual('someProduct');
    });
  });

  describe('findAll', () => {
    it('should get all users', async () => {
      repository.find.mockResolvedValue('someUsers');

      expect(repository.find).not.toHaveBeenCalled();

      const result = await service.findAll();
      expect(repository.find).toHaveBeenCalled();
      expect(result).toEqual('someUsers');
    });
  });

  describe('getById', () => {
    it('should retrieve a user with an ID', async () => {
      const mockProduct = {
        first_name: 'test name',
        email: 'test email',
        passwords: 'test passwords',
        user_status: 'test status',
      };

      repository.findOne.mockResolvedValue(mockProduct);

      const result = await service.getById(1);
      expect(result).toEqual(mockProduct);

      expect(repository.findOne).toHaveBeenCalledWith(1);
    });

    it('throws an error as a product is not found', () => {
      repository.findOne.mockResolvedValue(null);
      expect(service.getById(1)).rejects.toThrow(NotFoundException);
    });
  });


  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

