import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class HealthCheck {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyUEN: string;

  @Column()
  companyName: string;

  @Column()
  companyFullName: string;

  @Column()
  position: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column({ type: 'text', array: true, nullable: true })
  filesName: Array<string>;

  @AfterInsert()
  logInsert() {
    console.log('Inserted data id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated data id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed data id', this.id);
  }
}
