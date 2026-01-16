import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("user")
export class UserEntity extends BaseEntity {
  @Column({ nullable: true })
  name?: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: false })
  emailVerified: boolean;

  @Column({ nullable: true })
  image?: string;
}

@Entity("session")
export class SessionEntity extends BaseEntity {
  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user: UserEntity;

  @Column({ unique: true })
  token: string;

  @Column({ type: "timestamptz" })
  expiresAt: Date;

  @Column({ nullable: true })
  ipAddress?: string;

  @Column({ nullable: true })
  userAgent?: string;
}

@Entity("account")
export class AccountEntity extends BaseEntity {
  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user: UserEntity;

  @Column()
  accountId: string;

  @Column()
  providerId: string;

  @Column({ nullable: true })
  accessToken?: string;

  @Column({ nullable: true })
  refreshToken?: string;

  @Column({ type: "timestamptz", nullable: true })
  accessTokenExpiresAt?: Date;

  @Column({ type: "timestamptz", nullable: true })
  refreshTokenExpiresAt?: Date;

  @Column({ nullable: true })
  scope?: string;

  @Column({ nullable: true })
  idToken?: string;

  @Column({ nullable: true })
  password?: string;
}

@Entity("verification")
export class VerificationEntity extends BaseEntity {
  @Column()
  identifier: string;

  @Column()
  value: string;

  @Column({ type: "timestamptz" })
  expiresAt: Date;
}
