import { BandMember } from 'src/bandmembers/bandmembers.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('bands')
export class Band {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  genre: string;

  @Column({ type: 'int', nullable: true })
  formationYear: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => BandMember, (bandMember) => bandMember.band, {
    cascade: true,
  })
  members: BandMember[];
}
